export default interface IBook {
  badges: string[] | null;
  bookUrl: string | null;
  created_at: string | null;
  downloadLink: string | null;
  id: number;
  image: string | null;
  numberOfChapters: number | null;
  title: string | null;
}
