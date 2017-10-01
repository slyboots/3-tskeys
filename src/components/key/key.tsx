import * as React from 'react';

export interface KeyProps {
    readonly children?: any;
    note: string;
}
export class Key extends React.Component<KeyProps, undefined> {
    public overlap: number;
    public isActive: boolean;
    public background: string;

    public constructor(props: any) {
        super(props);
    }
    public render() {
        return (
            <div>
                {this.props.note}
            </div>
        );
    }
    /** gets the octave number as an int */
    public get octave(): number {
        return parseInt(this.props.note.replace(/([a-zA-Z#])*/, ''));
    }
    /** returns the base tone of the note (e.g the 'D#' in 'D#9') */
    public get tone(): string {
        return this.props.note.replace(/([0-9])+/, '');
    }
    /** returns the color of the key */
    public get color(): string {
        return this.props.note[1] === "#" ? "black" : "white";
    }
    /** returns the type of note "Natural" or "Enharmonic" */
    public get type(): string { return this.props.note[1] === "#"?"Enharmonic":"Natural";}
    /** The frequency of the note in HZ based on its note string */
    public get frequency(): number {return ((440 / 32) * Math.pow(2, ((this.midi - 9) / 12)));}
    /** The midi value of the note based on it's note string */
    public get midi(): number {
        return ((this.octave) * 12) + (['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'].indexOf(this.tone));
    }
    public setOverlap(amount: number) {
        this.overlap = 100 / (amount * 7) / 4;
    }
    // event response methods
    public activate() {
        this.isActive = true;
        this.background = "yellow";
    }
    public deactivate() {
        this.isActive = false;
        this.background = this.color;
    }
    public onPress() {
        console.log("not implemented: PianoKey onPress() method");
    }
    public onRelease() {
        console.log("not implemented: PianoKey onRelease() method");
    }
    public onOver() {
        console.log("not implemented: PianoKey onOver() method");
    }
    public onOut() {
        console.log("not implemented: PianoKey onOut() method");
    }
    private setElementStyles() {
        if (this.type == "Natural") {
            console.log("PianoKey class setElementStyles() method has not been implemented");
            // this.renderer.setElementClass(this.elRef.nativeElement, "natural", true);
            // this.renderer.setElementStyle(this.elRef.nativeElement, 'backgroundColor', this.colors.primary);
            // this.renderer.setElementStyle(this.elRef.nativeElement, 'borderColor', this.colors.border);
            // this.renderer.setElementStyle(this.elRef.nativeElement, "borderLeft", "0")

        }
        else {
            console.log("PianoKey class setElementStyles() method has not been implemented");

            // this.renderer.setElementClass(this.elRef.nativeElement, "enharmonic", true);
            // this.renderer.setElementStyle(this.elRef.nativeElement, 'backgroundColor', this.colors.accent);
            // this.renderer.setElementStyle(this.elRef.nativeElement, 'borderColor', this.colors.border);
            // this.renderer.setElementStyle(this.elRef.nativeElement, "marginLeft", "-" + this.offset + "%");
            // this.renderer.setElementStyle(this.elRef.nativeElement, "marginRight", "-" + this.offset + "%");
        }
    }
}
