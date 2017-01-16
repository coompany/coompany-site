export type Language = { code: string, display: string }

export class Project {
  public name: string
  public subtitle: string
  public summary: string
  public text1: string
  public text2: string
  public text3: string

  constructor(public prefix: string,
              public imgHome: string,
              public imgBig: string,
              public img1: string,
              public img2: string,
              public img3: string) {
    this.name = prefix + '.name';
    this.subtitle = prefix + '.subtitle';
    this.summary = prefix + '.summary';
    this.text1 = prefix + '.text1';
    this.text2 = prefix + '.text2';
    this.text3 = prefix + '.text3';
  }

  get imgBigUrl(): string {
    return `url(${this.imgBig})`;
  }
}

export type Client = { name: string, img: string, href: string }
