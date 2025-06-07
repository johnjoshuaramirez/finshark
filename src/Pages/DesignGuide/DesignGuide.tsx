import RatioList from "../../Components/RatioList/RatioList";
import { testIncomeStatementData } from "../../Components/Table/data";
import Table from "../../Components/Table/Table";

type Props = {};

const tableConfig = [
  {
    label: "Market Cap",
    render: (company: any) => company.marketCapTTM,
    subtitle: "Total value of all a company's shares of stock"
  }
];

const DesignGuide = (props: Props) => {
  return (
    <>
      <h1>
        Design guide - This is the design guide for Fin Shark. These are
        reusable components of the app with brief instructions on how to use
        them.
      </h1>
      <RatioList data={testIncomeStatementData} config={tableConfig} />
      <Table data={testIncomeStatementData} config={tableConfig} />
      <h3>
        Table - Table takes in a configuration object and company data as params
      </h3>
    </>
  );
};
export default DesignGuide;
