import * as React from "react";

/**
 * Properties of the CodePreview component
 */
interface ICodePreviewProps {
    code: string;
}

/**
 * State of the CodePreview component
 */
interface ICodePreviewState {
    code: string;
}

class CodePreview extends React.Component<ICodePreviewProps, ICodePreviewState> {
    public constructor(props: ICodePreviewProps) {
        super(props);
    }

    public readonly state: ICodePreviewState = {
        code: ""
    };

    public static getDerivedStateFromProps(nextProps: ICodePreviewProps, prevState: ICodePreviewState): ICodePreviewState {
        return {
            code: nextProps.code
        };
    }

    public render(): React.ReactNode {
        return <textarea className="code-preview" value={this.state.code}></textarea>;
    }
}

export { CodePreview };
