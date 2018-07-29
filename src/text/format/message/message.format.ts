import { DateTimeFormat } from 'dt-format';
import { MessageFormatType } from './message.format.type';
import { MessageLocale } from './message.locale';

type MessageFormatArgsType = string | number | boolean | Date;
type MessageFormatArgs = string | number | boolean | Date | MessageFormatArgsType[];

const PATTERN_REGEX = /\{([^\}]+)\}/gm;

/**
 * converts the passed pattern into an array by splitting on comma
 * e.g. {0, "time", "short"} will become [0, "time", "short"]
 * @param matches regular expression match for pattern
 * @returns string[]
 */
const getPatternArray = (matches: RegExpExecArray) => {
  const pattern = matches[1];
  let patternArray = [pattern];
  if (pattern.indexOf(',')) {
    patternArray = pattern.split(',');
  }

  return patternArray;
};

const getPatternValue = (
  value: MessageFormatArgs,
  type: MessageFormatType,
  subPattern?: string,
  locale?: MessageLocale,
) => {
  if (!(value instanceof Date) || type == null) {
    return '';
  }

  switch (type.trim()) {
    case MessageFormatType.TIME:
      return DateTimeFormat.format(value, subPattern ? subPattern.trim() : 'HH:mm', locale);
    case MessageFormatType.DATE:
      return DateTimeFormat.format(value, subPattern ? subPattern.trim() : 'dd/MM/yyyy', locale);
    default:
      return '';
  }
};

/**
 * check the pattern and converts the value from argument based on pattern
 * @param patternArray string[]
 * @param values array of all the passed arguments
 * @returns string
 */
const getValueToReplace = (
  patternArray: string[],
  values: MessageFormatArgs[],
  locale?: MessageLocale,
): string => {
  const passedItems =
    values.length === 1 && values[0] instanceof Array
      ? values[0] as MessageFormatArgs[]
      : values;

  switch (patternArray.length) {
    case 0:
      return '';
    case 1:
      return passedItems[Number(patternArray[0])].toString();
    case 2:
      return getPatternValue(
        passedItems[Number(patternArray[0])],
        patternArray[1] as MessageFormatType,
        undefined,
        locale,
      );
    case 3:
    default:
      return getPatternValue(
        passedItems[Number(patternArray[0])],
        patternArray[1] as MessageFormatType,
        patternArray[2],
        locale,
      );
  }
};

export class MessageFormat {

  /**
   * function to format a string based on passed argument
   * @param value string
   * @param args value to replace in string based on defined format
   * @returns string
   */
  public static format(value: string, ...args: MessageFormatArgs[]): string {
    return MessageFormat.formatWithLocale(value, MessageLocale.en_GB, ...args);
  }

  /**
   * function to format a string based on passed argument and locale
   * @param value string
   * @param locale MessageLocale
   * @param args value to replace in string based on defined format
   * @returns string
   */
  public static formatWithLocale(
    value: string,
    locale: MessageLocale,
    ...args: MessageFormatArgs[] // tslint:disable-line trailing-comma
  ) {
    let output = value;
    let matchIndex = 0;

    let matches = PATTERN_REGEX.exec(value);
    while (matches) {
      const valueToReplace = getValueToReplace(getPatternArray(matches), args, locale);
      output = output.replace(matches[0], valueToReplace);

      matchIndex = matchIndex + 1;
      matches = PATTERN_REGEX.exec(value);
    }

    return output;
  }
}
