export class DateHelper {
  static monthShortNameFormatter = new Intl.DateTimeFormat('en', { month: 'short' })

  /**
     * @param {string} dateString
     * @returns {Date}
     */
  static parseAsUTC (dateString: string): Date {
    // Date contains Z and T - is likely in ISO 8601 format (e.g. 1970-01-01T00:00:00Z)
    if (dateString.indexOf('T') !== -1 && dateString.indexOf('Z') !== -1) {
      return new Date(dateString)
    }

    dateString = dateString.trim()

    /** add T AND Z **/
    const utcDateString = dateString.replace(' ', 'T') + 'Z'

    return new Date(utcDateString)
  }

  static formatForLogging (date: Date): string {
    const monthShortName = DateHelper.monthShortNameFormatter.format(date)

    let min: string | number = date.getMinutes()
    let second: string | number = date.getSeconds()
    let hour: string | number = date.getHours()
    let ms: string | number = date.getMilliseconds()

    if (second < 10) {
      second = '0' + second
    }

    if (min < 10) {
      min = '0' + min
    }

    if (hour < 10) {
      hour = '0' + hour
    }

    if (ms < 10) {
      ms = '00' + ms
    } else if (ms < 100) {
      ms = '0' + ms
    }

    return monthShortName + ' ' + date.getDate() + ' ' + hour + ':' + min + ':' + second + '.' + ms
  }

  static isLeapYear (date: Date): boolean {
    const year = date.getUTCFullYear()
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
  }

  static getDaysInMonth (date: Date): number {
    return [31, DateHelper.isLeapYear(date) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][date.getUTCMonth()]
  }
}
