type FormatArgs = string | number | boolean;

export class MessageFormat {
  /**
   * function to format a string based on passed argument
   * @param value string
   * @param args value to replace in string based on defined format
   */
  public static format(value: string, ...args: FormatArgs[]) {
    return value.replace('{0}', args[0].toString());
  }
}
