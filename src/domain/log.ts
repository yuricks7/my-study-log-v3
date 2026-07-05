export class Log {
  public id: string;
  public title: string;
  public time: number;
  public created_at: string;

  constructor (
    id: string, title: string, time: number, created_at: string
  ) {
    this.id = id;
    this.title = title;
    this.time = time;
    this.created_at = created_at;
  }

  public static newLog(
    id: string,
    title: string,
    time: number,
    created_at: string
  ): Log {
    return new Log(id, title, time, formatDate(created_at));
  }
}

const formatDate = (isoString: string): string => {
  const date = new Date(isoString);

  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");

  return `${yyyy}/${mm}/${dd}`;
};