import css from "./Layout.module.css";

export default function Layout({ children }) {
  return <main className={css.conteiner}>{children}</main>;
}
