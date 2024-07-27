import Header from "../Header";
import Footer from "../Footer";

interface ICard {
  children: string;
}

const index = ({ children }: ICard) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default index;
