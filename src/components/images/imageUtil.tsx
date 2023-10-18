function importAll(r: __WebpackModuleApi.RequireContext): string[] {
  return r.keys().map(r) as string[];
}

interface ImageList {
  [key: string]: string;
}

function getImageList() {
  const imageList = {} as ImageList;
  const images = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));

  /* images.forEach(image => {
    const key = image.replace(/([\s\S]*?)(apple|banana|)/g, '');
    imageList[key] = image;
  }); */

  images.forEach(image => {
    const match: RegExpMatchArray | null = image.match(/\/([a-zA-Z]+)\.\w+/);
    if(match) {
      const key: string = match[1];
      imageList[key] = image;
    }
  });

  return imageList;
}

export default getImageList;



/* const strings: string[] = [
  "/static/media/banana.5560162bc97c0b1df741.jpg",
  "/static/media/apple.d8e63a8d76a39b7e4336.jpg"
];

const pattern: RegExp = /\/([a-zA-Z]+)\.\w+/;

const extractedWords: string[] = [];

strings.forEach((s: string) => {
  const match: RegExpMatchArray | null = s.match(pattern);
  if (match) {
      const word: string = match[1];
      extractedWords.push(word);
  }
});

console.log(extractedWords);
 */