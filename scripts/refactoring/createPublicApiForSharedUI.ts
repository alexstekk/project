import path from 'path';
import { Project } from 'ts-morph';

type ExportedNode = Array<string | undefined>;

interface ExportedNodes {
    notTypedNodes: ExportedNode;
    typedNodes: ExportedNode;
}

const project = new Project({});

// добавляем файлы с исходным кодом, с которыми будем работать
project.addSourceFilesAtPaths(['src/**/*.ts', 'src/**/*.tsx']);

// получаем все ts(x)-файлы
const files = project.getSourceFiles();

const indexFilenamePattern = 'index.ts';
const layerPattern = 'shared';
const slicePattern = 'ui';
const typeExportDeclarations = ['InterfaceDeclaration', 'TypeAliasDeclaration'];

// получаем путь до папки ui в shared-слое
const sharedUiPath = path.resolve(
    __dirname,
    '..',
    '..',
    'src',
    layerPattern,
    slicePattern,
);
const sharedUiDir = project.getDirectory(sharedUiPath);
// получаем пути до попок с ui-компонентами в shared-слое
const componentsDirs = sharedUiDir?.getDirectories();

// добавляем во все shared-u--компоненты index.ts с реэкспортом
componentsDirs?.forEach((directory) => {
    const componentFolderName = directory.getPath();
    const indexFilePath = `${componentFolderName}/${indexFilenamePattern}`;
    const isIndexFileExist = directory.getSourceFile(indexFilePath);

    if (!isIndexFileExist) {
        const filesInFolder = directory.getSourceFiles([
            '**/*.tsx',
            '!**/*.stories.tsx',
            '!**/*.test.tsx',
        ]);
        // ВАЖНО: в папке должен быть только 1 файл компонента
        const componentFilename =
            filesInFolder[0].getBaseNameWithoutExtension();

        // получаем все декларации экспорта (export ...)
        const exportedDeclarations = filesInFolder[0].getExportedDeclarations();

        // массивы для хранения
        const exportedNodes: ExportedNodes = {
            notTypedNodes: [],
            typedNodes: [],
        };

        for (const [name, declarations] of exportedDeclarations) {
            declarations.map((d) => {
                const declarationName = d.getKindName();
                const isTypeOrInterface =
                    typeExportDeclarations.includes(declarationName);

                if (isTypeOrInterface) {
                    exportedNodes.typedNodes.push(name);
                } else {
                    exportedNodes.notTypedNodes.push(name);
                }
            });
        }

        let resultSourceCode = '';

        const exportedVarsWithoutTypesStr =
            exportedNodes.notTypedNodes.join(', ');
        const exportWithoutTypes = `export { ${exportedVarsWithoutTypesStr} } from './${componentFilename}';`;
        resultSourceCode += exportWithoutTypes;

        if (exportedNodes.typedNodes.length !== 0) {
            const exportedVarsWithTypesStr =
                exportedNodes.typedNodes.join(', ');
            const exportWithTypes = `\r\nexport type { ${exportedVarsWithTypesStr} } from './${componentFilename}';`;
            resultSourceCode += exportWithTypes;
        }

        const file = directory.createSourceFile(
            indexFilePath,
            resultSourceCode,
            { overwrite: true },
        );
        file.save().then(() =>
            console.log(`"index.ts" created for ${componentFolderName}`),
        );
    }
});

// изменяем импорты shared-ui-компонентов на импорты через public api
files.forEach((sourceFile) => {
    const importDeclarations = sourceFile.getImportDeclarations();

    importDeclarations.forEach((importDeclaration) => {
        const value = importDeclaration.getModuleSpecifierValue();
        const valueWithoutAlias = value.replace('@/', '');
        const segments = valueWithoutAlias.split('/');

        const isSharedLayer = segments?.[0] === layerPattern;
        const isUiSlice = segments?.[1] === slicePattern;

        if (isAbsolute(valueWithoutAlias) && isSharedLayer && isUiSlice) {
            const newValidImport = valueWithoutAlias
                .split('/')
                .slice(0, 3)
                .join('/');
            importDeclaration.setModuleSpecifier(`@/${newValidImport}`);
        }
    });
});

// сохранение для применения изменений
project.save().then(() => console.log('All is done!'));

function isAbsolute(path: string) {
    const layers = [
        'app',
        'entities',
        'features',
        'pages',
        'shared',
        'widgets',
    ];
    return layers.some((layer) => path.startsWith(layer));
}
