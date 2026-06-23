interface TableColumn {
  title: string;
  dataIndex: string;
  key: number;
}

interface TableRow {
  id: number;
  [key: string]: string | number;
}

export interface TableDimensionsProps {
  tableInfos: {
    columns: TableColumn[];
    dataSource: TableRow[];
  };
}

const TableDimensions: React.FC<TableDimensionsProps> = ({ tableInfos }) => {
  const { columns, dataSource } = tableInfos;
  return (
    <div>
      <table
        style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}
      >
        <caption
          className="bg-blue-600 text-white"
          style={{
            fontSize: "22px",
            fontWeight: "bold",
            borderRadius: "15px 15px 0 0",
            paddingTop: "8px",
          }}
        >
          Espessura da Parede (mm) / Peso (kg) / Barra
        </caption>
        <thead>
          <tr
            className="bg-blue-700 text-white"
            style={{
              borderBottom: "2px solid #ddd",
            }}
          >
            {columns.map((column) => (
              <th
                key={column.key}
                className="border-2 border-blue-600"
                style={{ padding: "10px" }}
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataSource.map((row, rowIndex) => (
            row.id % 2 == 0 ? (
            <tr key={rowIndex}>
              {columns.map((column) => (
                <td
                  key={column.key}
                  className="border-2 border-blue-600 bg-blue-300"
                  style={{ padding: "10px" }}
                >
                  {row[column.dataIndex]}
                </td>
              ))}
            </tr>
          ) : (<tr key={rowIndex}>
              {columns.map((column) => (
                <td
                  key={column.key}
                  className="border-2 border-blue-600"
                  style={{ padding: "10px" }}
                >
                  {row[column.dataIndex]}
                </td>
              ))}
            </tr>)))}
        </tbody>
      </table>
    </div>
  );
};

export default TableDimensions;
