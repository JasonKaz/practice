import * as React from "react";
import { SpecItem } from "./SpecItem";
import { ApiClient } from "../services/ApiClient";

/**
 * State for the SpecList class
 */
interface ISpecListState {
  specFiles: JSX.Element[];
  selectedSpec: string | null;
}

interface ISpecListProps {
  onSpecClick: (name: string) => void;
}

/**
 * Class that lists the specs available to run
 */
class SpecList extends React.Component<ISpecListProps, ISpecListState> {
  private constructor(props: ISpecListProps) {
    super(props);

    ApiClient.getSpecs().then((d: string[]) => {
      const handleItemClick = this.handleItemClick.bind(this); // tslint:disable-line

      this.setState({
        specFiles: d.map((f: string, idx: number) => <SpecItem key={idx} path={f} onClick={handleItemClick} />),
      });
    });
  }

  private handleItemClick(name: string, path: string): void {
    this.setState({selectedSpec: name});

    this.props.onSpecClick(name);
  }

  /**
   * State for the SpecList class
   */
  public readonly state: ISpecListState = {
    specFiles: [],
    selectedSpec: null,
  };

  /**
   * Renders the component
   */
  public render(): React.ReactNode {
    return <ul className="spec-list">{this.state.specFiles}</ul>;
  }
}

export { SpecList };
