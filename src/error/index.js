import { error__Filter_SpecialClass__ } from "./specialClass.error"

export function error__main_filter__(wrappProps) {
   const { ClassToAdd, SelectClass, SpecialWrapp, PerWord } = wrappProps;

   if (whatItIs(ClassToAdd) !== "[object String]")
      throw new Error("ClassToAdd must be a string");

   if (whatItIs(PerWord) !== "[object Boolean]")
      throw new Error("PerWord must be a boolean");

    error__Filter_SpecialClass__(SelectClass, PerWord)
}
