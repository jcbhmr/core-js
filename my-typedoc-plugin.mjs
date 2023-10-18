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
    // By default TypeDoc generates a lot of 'export=' empty modules
    if (
      reflection.name === "export=" &&
      reflection.kind === ReflectionKind.Namespace &&
      !reflection.children
    ) {
      // console.debug(reflection)
      context.project.removeReflection(reflection);
    }
  }
  app.converter.on(Converter.EVENT_CREATE_DECLARATION, handleDeclaration);
}
