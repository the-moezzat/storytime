export default interface IBook {
  badges: string[];
  bookUrl: string;
  created_at: string;
  downloadLink: string | null;
  id: number;
  image: string;
  numberOfChapters: number;
  title: string;
}
