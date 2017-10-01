import * as React from 'react'

export interface ContainerProps {
    direction: "row" | "column";
    justify: "start" | "end" | "between";
    width?: string;
    height?: string;
    children?: any;
    outline?: boolean;
    title?: string;
}

export class Container extends React.Component<ContainerProps, undefined> {
    public static propDefaults: ContainerProps = {
        direction: "row",
        justify: "start",
        width: "100%",
        height: "100%",
        title: ""
    }
    public constructor(props: any) { super(props); }
    
    public render() {
        let classNames = this.buildClassString();
        let styles = {
            width: this.props.width,
            height: this.props.height
        }
        let heading = this.props.title;
        return (
            <div className={classNames} style={styles}>
                {heading? this.ContainerTitle(heading) : ""}
                {this.props.children}
            </div>
        );
    }
    private buildClassString(): string {
        let direction: string = this.props.direction;
        let justify: string = this.props.justify;
        let outline: boolean = this.props.outline;
        let classes: string = "flex flex-wrap content-start center";

        if (direction === "row") { classes += " flex-row"; }
        else { classes += "flex-column"; }

        if (justify === "start") { classes += " justify-start"; }
        else if (justify === "end") { classes += " justify-end"; }
        else if (justify === "between") { classes += " justify-between"; }

        if (outline) { classes += " outline"; }

        return classes;
    }
    private ContainerTitle(title: string) {
        if (title !== "") {
            return (
                <h1 className="f1 tracked w-100 tc">{title}</h1>
            )
        }
        else {
            return (undefined);
        }
    }
}