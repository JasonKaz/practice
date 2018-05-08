import * as React from "react";
import { SpecItem } from "./SpecItem";

/**
 * State for the SpecList class
 */
interface ISpecListState {
  specFiles: JSX.Element[];
}

/**
 * Class that lists the specs available to run
 */
class SpecList extends React.Component<{}, ISpecListState> {
  private constructor(props: {}) {
    super(props);

    SpecList.getSpecs().then((d: string[]) => {
      this.setState({
        specFiles: d.map((f: string, idx: number) => <SpecItem key={idx} path={f} />),
      });
    });
  }

  /**
   * State for the SpecList class
   */
  public state: ISpecListState = {
    specFiles: [],
  };

  /**
   * Fetches the available specs from the server
   */
  private static async getSpecs(): Promise<string[]> {
    return fetch("/specs").then((res: Response) => res.json());
  }

  /**
   * Renders the component
   */
  public render(): React.ReactNode {
    return <ul>{this.state.specFiles}</ul>;
  }
}

export { SpecList };
