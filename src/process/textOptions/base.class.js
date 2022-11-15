import { __specialArray__, IterateOnAnArray } from "./specialArray.process";
export class Base {
  constructor({ SpecialArray = false, Props = false, __error, __process }) {
    // SpecialArray = {
    //   targets: [],
    //   elementsToGive: [],
    //   process: {},
    // }

    this.process = this.#PROCESS(__process);
    this.SpecialArray = SpecialArray;

    this.#ERROR(__error);

    if (this.SpecialArray) {
      this.findTarget = (target) => this.#FIND_TARGET(target);
    }

    if (Props) {
      // this.SpecialArray = this.#SPECIAL_ARRAY;
    }
  }

  #FIND_TARGET(target) {
    const SA = this.SpecialArray;

    if (!SA.targets.flat().includes(target)) return undefined;

    const TARGET_INDEX = IterateOnAnArray(SA.targets, target);
    const TARGET_RESULT = __specialArray__(SA.elementsToGive, TARGET_INDEX);

    return {
      result: TARGET_RESULT,
      process: (props) => SA.process(props),
    };
  }

  #PROCESS(customProcess) {
    return customProcess();
  }

  #ERROR(custom) {
    custom();
  }
}
