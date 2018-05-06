import * as React from "react";

/**
 * Properties of the SpecItem component
 */
interface ISpecItemProps {
  path: string;
}

/**
 * State for the SpecItem class
 */
interface ISpecItemState {
  name: string;
  path: string;
}

/**
 * Class that lists a single spec that can run
 */
class SpecItem extends React.Component {
  public constructor(props: ISpecItemProps) {
    super(props);

    this.state.path = props.path;
    this.state.name = props.path.substring(props.path.lastIndexOf("\\") + 1, props.path.lastIndexOf("."));
  }

  /**
   * State for the SpecItem class
   */
  public state: ISpecItemState = {
    name: "",
    path: "",
  };

  /**
   * Runs a given spec by it's name
   * @param name
   */
  public static runSpec(name: string): void {
    fetch(`/run-test/${name}`);
  }

  /**
   * Renders the component
   */
  public render(): React.ReactNode {
    return (
      <li
        onClick={() => {
          SpecItem.runSpec(this.state.name);
        }}
      >
        {this.state.name}
      </li>
    );
  }
}

export { SpecItem };
