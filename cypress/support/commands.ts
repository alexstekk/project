// eslint-disable-next-line import/no-unresolved
import * as commonCommands from "./commands/common";
// eslint-disable-next-line import/no-unresolved
import * as profileCommands from "./commands/profile";
// eslint-disable-next-line import/no-unresolved
import * as articlesCommands from "./commands/article";
// eslint-disable-next-line import/no-unresolved
import * as commentsCommands from "./commands/comments";
// eslint-disable-next-line import/no-unresolved
import * as ratingCommands from "./commands/rating";

Cypress.Commands.addAll(commonCommands)
Cypress.Commands.addAll(profileCommands)
Cypress.Commands.addAll(articlesCommands)
Cypress.Commands.addAll(commentsCommands)
Cypress.Commands.addAll(ratingCommands)