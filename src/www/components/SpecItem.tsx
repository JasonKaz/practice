import * as React from "react";

/**
 * Properties of the SpecItem component
 */
interface ISpecItemProps {
  path: string;
  onClick: (name: string, path: string) => void;
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
class SpecItem extends React.Component<ISpecItemProps, ISpecItemState> {
  public constructor(props: ISpecItemProps) {
    super(props);

    this.state.path = props.path;
    this.state.name = props.path.substring(props.path.lastIndexOf("\\") + 1, props.path.lastIndexOf("."));
  }

  /**
   * State for the SpecItem class
   */
  public readonly state: ISpecItemState = {
    name: "",
    path: "",
  };

  /**
   * Renders the component
   */
  public render(): React.ReactNode {
    return (
      <li
        onClick={() => { this.props.onClick(this.state.name, this.state.path); }}
      >
        {this.state.name}
      </li>
    );
  }
}

export { SpecItem };
