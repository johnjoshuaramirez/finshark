import { useOutletContext } from "react-router";
import { CompanyKeyMetrics } from "../../company";
import { useEffect, useState } from "react";
import { getKeyMetrics } from "../../api";
import RatioList from "../RatioList/RatioList";
import Spinner from "../Spinner/Spinner";
import {
  formatLargeNonMonetaryNumber,
  formatRatio
} from "../../Helpers/NumberFormatting";
import StockComment from "../StockComment/StockComment";

type Props = {};

const tableConfig = [
  {
    label: "Market Cap",
    render: (company: CompanyKeyMetrics) =>
      formatLargeNonMonetaryNumber(company.marketCap),
    subTitle: "Total value of all a company's shares of stock"
  },
  {
    label: "Current Ratio",
    render: (company: CompanyKeyMetrics) =>
      formatRatio(company.currentRatioTTM),
    subTitle:
      "Measures the companies ability to pay short term debt obligations"
  },
  {
    label: "Return On Equity",
    render: (company: CompanyKeyMetrics) =>
      formatRatio(company.returnOnEquityTTM),
    subTitle:
      "Return on equity is the measure of a company's net income divided by its shareholder's equity"
  },
  {
    label: "Return On Assets",
    render: (company: CompanyKeyMetrics) =>
      formatRatio(company.returnOnTangibleAssetsTTM),
    subTitle:
      "Return on assets is the measure of how effective a company is using its assets"
  },
  {
    label: "Free Cashflow Per Share",
    render: (company: CompanyKeyMetrics) =>
      formatRatio(company.freeCashFlowYieldTTM),
    subTitle:
      "Return on assets is the measure of how effective a company is using its assets"
  },
  {
    label: "Graham Number",
    render: (company: CompanyKeyMetrics) =>
      formatRatio(company.grahamNumberTTM),
    subTitle:
      "This is the upperbouind of the price range that a defensive investor should pay for a stock"
  },
];

const CompanyProfile = (props: Props) => {
  const ticker = useOutletContext<string>();
  const [companyData, setCompanyData] = useState<CompanyKeyMetrics>();

  useEffect(() => {
    const getCompanyKeyMetrics = async () => {
      const value = await getKeyMetrics(ticker);
      setCompanyData(value?.data[0]);
    };

    getCompanyKeyMetrics();
  }, []);

  return (
    <>
      {companyData ? (
        <>
          <RatioList data={companyData} config={tableConfig} />
          <StockComment stockSymbol={ticker} />
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default CompanyProfile;
