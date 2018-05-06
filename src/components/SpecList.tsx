import * as React from "react";

/**
 * State for the SpecList class
 */
interface ISpecListState {
  specFiles: string[];
}

/**
 * Class that lists the specs available to run
 */
class SpecList extends React.Component {
  private constructor(props: {}) {
    super(props);

    SpecList.getSpecs().then((d: string[]) => {
      this.setState({ specFiles: d });
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
    return <ul>{this.state.specFiles.map((x: string, idx: number) => <li key={idx}>{x}</li>)}</ul>;
  }
}

export { SpecList };
