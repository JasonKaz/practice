import * as React from "react";
import { SpecList } from "./SpecList";
import { CodePreview } from "./CodePreview";
import { ApiClient } from "../services/ApiClient";

class App extends React.Component<{}, {}> {
    public constructor(props: {}) {
        super(props);
    }

    public readonly state = {
        specCode: ""
    };

    public render(): React.ReactNode {
        const onSpecClick = this.onSpecClick.bind(this);

        return <div><SpecList onSpecClick={onSpecClick} /><CodePreview code={this.state.specCode} /></div>;
    }

    private onSpecClick(name: string): void {
        ApiClient.getSpecDetails(name).then((t: string) => {
            this.setState({specCode: t});
        });
    }
}

export { App };
