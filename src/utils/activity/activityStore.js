const reverseOp = {
  add: "delete",
  delete: "add",
  move: "move",
};

export class Activity {
  constructor(limit) {
    const activityStack = [];
    let currentIndex = -1;

    this.getCurrent = () => {
      return activityStack[currentIndex];
    };

    this.setCurrent = (currentActivity) => {
      activityStack.splice(
        currentIndex + 1,
        activityStack.length - currentIndex
      );

      if (activityStack.length < limit) {
        activityStack.push(currentActivity);
      } else {
        activityStack.splice(0, 1);
        activityStack.push(currentActivity);
      }
      currentIndex++;
    };

    this.undo = () => {
      if (!!activityStack.length && currentIndex >= 0) {
        const undoActivity = {
          ...this.getCurrent(),
          operation: reverseOp?.[this.getCurrent()?.operation],
        };
        currentIndex--;
        return undoActivity;
      } else {
        throw new Error("There is nothing left to undo.");
      }
    };

    this.redo = () => {
      if (currentIndex < activityStack.length) {
        currentIndex++;
        const redoActivity = { ...this.getCurrent() };
        return redoActivity;
      } else {
        throw new Error("There is nothing left to redo.");
      }
    };
  }
}
