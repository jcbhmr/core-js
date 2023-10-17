// @ts-check
import { Converter, ReflectionKind } from "typedoc";
import assert from "node:assert/strict"

/**
 * @param {Readonly<import('typedoc').Application>} app
 */
export function load(app) {
  /**
   * @param {import('typedoc').Context} context
   * @param {import('typedoc').DeclarationReflection} reflection
   */
  function handleDeclaration(context, reflection) {
    // RELIES on only processing "src/*/shim.js" files!
    // This renames the 'shim.js' 'export=' default name to the parent folder name
    // which is like 'Array.prototype.at' or similar.
    if (reflection.parent?.name) {
      const folder = reflection.parent.name.split("/").at(-2);
      assert(folder)
      reflection.name = folder
    }

    // REMOVES all the namespace fluff that comes from being 'module.exports = {}'.
    // We just care about the functions, objects, strings, etc; not the namespace object.
    if (reflection.kind === ReflectionKind.Namespace) {
      context.project.removeReflection(reflection)
    }
  }
  app.converter.on(Converter.EVENT_CREATE_DECLARATION, handleDeclaration);
}
