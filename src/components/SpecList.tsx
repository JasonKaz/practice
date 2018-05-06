import * as React from "react";
import { SpecItem } from "./SpecItem";

/**
 * State for the SpecList class
 */
interface ISpecListState {
  specFiles: SpecItem[];
}

/**
 * Class that lists the specs available to run
 */
class SpecList extends React.Component {
  private constructor(props: {}) {
    super(props);

    SpecList.getSpecs().then((d: string[]) => {
      this.setState({
        specFiles: d.map((f: string) => <SpecItem path={f} />),
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
