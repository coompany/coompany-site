export type Language = { code: string, display: string }

export class Project {
  public name: string
  public subtitle: string
  public summary: string
  public text1: string
  public text2: string
  public text3: string
  public signupText: string
  public imgHome: string
  public video: string
  public img1: string
  public img2: string
  public img3: string

  constructor(public prefix: string, public presentImgs: [boolean] = [true, true, true]) {
    this.video = `/assets/${this.prefix}/video.mp4`;
    this.img1 = `/assets/${this.prefix}/1.jpg`;
    this.img2 = `/assets/${this.prefix}/2.jpg`;
    this.img3 = `/assets/${this.prefix}/3.jpg`;
    this.imgHome = `/assets/${this.prefix}/home.png`;

    this.name = prefix + '.name';
    this.subtitle = prefix + '.subtitle';
    this.summary = prefix + '.summary';
    this.text1 = prefix + '.text1';
    this.text2 = prefix + '.text2';
    this.text3 = prefix + '.text3';
    this.signupText = prefix + '.signupText';
  }
}

export type Client = { name: string, img: string, imgBW: string, href: string }
