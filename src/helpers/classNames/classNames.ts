type Mods = Record<string, boolean | string>

export function classNames(mainClassName: string, modifications: Mods, additionalClassNames: string[]): string {
    return [
        mainClassName,
        ...additionalClassNames,
        ...Object.entries(modifications)
            .filter(([className, value]) => Boolean(value))
            .map(([className]) => className)
    ].join(' ');
}

// console.log(classNames('remove-btn', {hi: false, yoyoyo: true}, ['hello']));
