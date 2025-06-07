import { v4 as uuidv4 } from "uuid";

interface Props {
  config: any;
  data: any;
}

const Table = ({ config, data }: Props) => {
  const renderedRows = data.map((company: any) => {
    return (
      <tr key={uuidv4()}>
        {config.map((val: any) => {
          return <td key={uuidv4()} className="p-3">{val.render(company)}</td>;
        })}
      </tr>
    );
  });

  const renderedHeaders = (
    <tr>
      {config.map((config: any) => {
        return (
          <th
            key={uuidv4()}
            className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            {config.label}
          </th>
        );
      })}
    </tr>
  );

  return (
    <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8">
      <table>
        <thead className="min-w-full divide-y divide-gray-200 m-5">
          {renderedHeaders}
        </thead>
        <tbody>{renderedRows}</tbody>
      </table>
    </div>
  );
};
export default Table;
