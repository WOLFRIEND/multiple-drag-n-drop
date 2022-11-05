import { Container } from "./components/Container/Container";
import styles from "./App.module.scss";

export const App = () => {
  return (
    <div className={styles.app}>
      <Container />
    </div>
  );
};
