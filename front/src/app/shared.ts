export type Language = { code: string, display: string }

export class Project {
  public name: string
  public subtitle: string
  public summary: string

  constructor(public prefix: string, public img: string) {
    this.name = prefix + '.name';
    this.subtitle = prefix + '.subtitle';
    this.summary = prefix + '.summary';
  }
}
