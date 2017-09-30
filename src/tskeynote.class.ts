export class TSKeyNote {
    //Constructor
    constructor(note: string) { this.note = note;}
    
    //Public Fields
    public note: string;
    //public style: KeyStyle;
    public overlap: number;
    public isActive: boolean = false;
    public background: string;
    //Public Methods
    /**
     * gets the octave number from the note property
     * and then returns it as an int.
     */
    public get octave(): number {
        return parseInt(this.note.replace(/([a-zA-Z#])*/, ''));
    }
    /**
     * returns the base tone of the note (e.g the 'D#' in 'D#9')
     */
    public get tone(): string {
        return this.note.replace(/([0-9])+/, '');
    }
    /**
     * returns the color this key will be by
     * checking if it contains a "#" (Enharmonic)
     * or not (Natural)
     */
    public get color(): string {
        return this.note[1] === "#" ? "black" : "white";
    }
    /**
     * returns the type of note "Natural" or "Enharmonic"
     * based on whether the note property contains a "#"
     */
    public get type(): string { return this.note[1] === "#"?"Enharmonic":"Natural";}
    /** calculate the frequency of a note in HZ from its note string
     * by converting it to the corresponding midi value and
     * then using a standard formula for tuning
     */
    public get frequency(): number {return <number>((440 / 32) * Math.pow(2, ((this.midi - 9) / 12)));}
    /** Convert a note string into a midi value using the note property */
    public get midi(): number {
        return ((this.octave) * 12) +
            (['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'].indexOf(this.tone));
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
    
    //Private Fields
    
    
    //Private Methods
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
    
    // PUBLIC PROPERTIES
    

    // Accessors

    
}