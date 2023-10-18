// @ts-check
import { Converter, ReflectionKind } from "typedoc";
/**
 * @param {Readonly<import('typedoc').Application>} app
 */
export function load(app) {
  /**
   * @param {import('typedoc').Context} context
   * @param {import('typedoc').DeclarationReflection} reflection
   */
  function handleDeclaration(context, reflection) {
    // REMOVES all the namespace fluff that comes from being 'module.exports = {}'.
    // We just care about the functions, objects, strings, etc; not the namespace object.
    if (reflection.name === "export=" && reflection.kind === ReflectionKind.Namespace && !reflection.children) {
        context.project.removeReflection(reflection);
    }
  }
  app.converter.on(Converter.EVENT_CREATE_DECLARATION, handleDeclaration);
}
