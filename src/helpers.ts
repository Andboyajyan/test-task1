export interface CsvItem {
  [key: string]: string;
}

export const csvJSON = (csv: string): CsvItem[] => {
  const lines = csv.split("\n");

  const result: CsvItem[] = [];

  const headers: string[] = lines[0].split(",");

  for (let i = 1; i < lines.length; i++) {
    const obj: CsvItem = {};
    const currentline = lines[i].split(",");

    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j];
    }

    result.push(obj);
  }

  return result;
};

const dateToTimestamp = (dateString: string) => {
  const timestamp = Date.parse(dateString);
  return timestamp;
};

export const createChartArr = (data: CsvItem[]) => {
  const arr: [number, number][] = [];
  data.forEach((element) => {
    if (element.Date && element.Volume) {
      arr.push([dateToTimestamp(element.Date), +element.Volume]);
    }
  });
  return arr;
};
