export enum TIMEFRAME {
    MONTH = 'MONTH',
    QUARTER = 'QUARTER',
    YEAR = 'YEAR'
}

/**
 * @name GetBalanceSheetQueryParams
 * GET BalanceSheet
 * @description Returns a balance sheet for the end of the month of the specified date. It also returns the value at the end of the same month for the previous year.
 *
 * date e.g. 2014-04-30
 * periods The number of periods to compare (integer between 1 and 11)
 * timeframe    The period size to compare to (MONTH, QUARTER, YEAR)
 * trackingOptionID1    The balance sheet will be filtered by this option if supplied. Note you cannot filter just by the TrackingCategory.
 * trackingOptionID2    If you want to filter by more than one tracking category option then you can specify a second option too.See the Balance Sheet report in Xero learn more about this behavior when filtering by tracking category options
 * standardLayout    If you set this parameter to "true" then no custom report layouts will be applied to response
 * paymentsOnly    Set this to true to get cash transactions only
 */
export type GetBalanceSheetQueryParams = {
    date?: string
    periods?: number
    timeframe?: TIMEFRAME
    trackingOptionID1?: string
    trackingOptionID2?: string
    standardLayout?: boolean
    paymentsOnly?: boolean
}

export type ReportType = 'BalanceSheet'

/**
 * @name ReportRow
 * @example
 *
 * {
 *    "RowType": "Header",
 *    "Cells": [
 *       { "Value": "" },
 *       { "Value": "28 Feb 2018" },
 *       { "Value": "28 Feb 2017" }
 *    ]
 * },
 * {
 *   "RowType": "Section",
 *   "Title": "Assets"
 * },
 */
export type ReportRow = {

}

export type Report = {
    ReportID: string
    ReportName: string
    ReportType: ReportType
    ReportTitles: string[]
    ReportDate: string
    UpdatedDateUTC: string
    Rows: ReportRow[]
}

/**
 * @example
 *
 * {
 *   "Reports": [
 *     {
 *       "ReportID": "BalanceSheet",
 *       "ReportName": "Balance Sheet",
 *       "ReportType": "BalanceSheet",
 *       "ReportTitles": [
 *         "Balance Sheet",
 *         "Demo Company (AU)",
 *         "As at 28 February 2018"
 *       ],
 *       "ReportDate": "23 February 2018",
 *       "UpdatedDateUTC": "\/Date(1519358515899)\/",
 *       "Rows": [
 *         ...
 *       ]
 *     }
 *   ]
 * }
 */
export interface GetBalanceSheetResponse {
    Reports: Report[]
}