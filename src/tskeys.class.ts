import { TSKeyConfig } from "./tskeysconfig.interface";
import { TSKeyNote } from "./tskeynote.class";

export class TSKeys {
    //Constructor
    constructor(config: TSKeyConfig) {
        this.name = config.id;
        this.rootNote = config.rootNote;
        this.container = config.container;
        this.octaves = config.octaves;
        this.majorNotes = this.octaves * 7;
        this.majorWidth = 100 / this.majorNotes;
        this.minorNotes = this.octaves * 5;
        this.minorOffset = 100 / (this.majorNotes) / 4;
        this.totalKeys = this.octaves * 12;
        this.orderNotes();
        this.createKeys();
    }
    
    //Public Fields
    public name: string;
    public rootNote: string;
    public container: string;
    public octaves: number;
    public majorNotes: number;
    public majorWidth: number;
    public minorNotes: number;
    public minorOffset: number;
    public totalKeys: number;
    public keys: TSKeyNote[];

    public mouseIsDown: boolean;
    public keysDown: any;
    public keyDownCallback: Function;
    public keyUpCallback: Function;

    //Public Methods
    /** Create an array of piano keys*/
    public createKeys(): void {
        // let keyArray: Array<PianoKey> = [];
        // let note_counter = 0;
        // Initialize PianoKey array
        this.keys = new Array<TSKeyNote>();
        let octaves: number = this.octaves;

        // Loop through the internal notes array ${octaves} times;
        for (let oIndex: number = 0; oIndex < octaves; oIndex++) {

            let baseOctave: number = parseInt(this.rootNote.replace(/([a-zA-Z#]*)/, ''));

            for (let nIndex: number = 0; nIndex < 12; nIndex++) {
                // get current note string and check its value to
                // determine if we should force increment the baseOctave
                // before appending it to the note string.
                let currentNote: string = this.notes[nIndex];
                baseOctave += ((currentNote === "C" && (nIndex !== 0)) ? 1 : 0);
                currentNote += (baseOctave + oIndex).toString()

                let newKey = new TSKeyNote(currentNote);
                if(newKey.type == 'Enharmonic') {
                    newKey.setOverlap(octaves);
                }
                this.keys.push(newKey);
            }
        }
    }
    public render(): void {
        this.injectStyles();
        this.injectKeyboard();
    }
    //Private Fields
    private activeKeys: TSKeyNote[];
    /**Internally store the keyboard note order*/
    private notes: Array<string> = [
        'C', 'C#', 'D','D#', 'E', 'F','F#', 'G', 'G#','A', 'A#', 'B'
    ];
    //Private Methods
    private rotateArray(array: Array<any>, index: number): Array<any> {
        let length = array.length >>> 0;
        index = index >> 0;
        let newArray: Array<string> = (Array<string>()).concat(array);
        newArray.push.apply(newArray, newArray.splice.call(newArray, 0, index));
        return newArray;
    }
    private orderNotes(): void {
        //get the index of the desired starting note to use as count
        let shiftAmount: number = this.notes.indexOf(this.rootNote.replace(/([0-9])+/, ''));
        this.notes = this.rotateArray(this.notes, shiftAmount);
        console.log(JSON.stringify(this.notes));
    }
    private injectStyles() {
        let cssel: HTMLStyleElement = document.createElement("style");
        cssel.innerHTML = `
        #content {
            width: 80%;
            height: 200px;
            margin: 0 auto;
            border: 2px solid black;
        }
        .keyboard {
            width: 100%;
            height: 100%;
            background-color: #16161D;
            min-height: 100px;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-between;
            align-items: stretch;
            margin: 0 auto;
            border-radius: 0.25rem;
            border: 1px solid purple;
            position: relative;
            overflow-x: auto;
        }
        .pianokey {
            align-self: stretch;
            user-select: none;
            border: 1px solid orange;
            color: grey;
        }
        .natural {
            flex: 2 0 auto;
            min-height: 100px;
            height: 100%;
            border-radius: 0 0 3px 3px;
            z-index: 0;
            border-width: 1px;
            border-style: solid;
            border-top: 0;
            background-color: white;
        }
        .enharmonic {
            flex: 1 1 auto;
            min-height: 65px;
            height: 65%;
            border-radius: 0 0 2px 2px;
            z-index: 2;
            border-width: 1px;
            border-style: solid;
            border-top: 0;
            background-color: black;
        }
        `
        document.getElementsByTagName("head")[0].appendChild(cssel);
    }
    private injectKeyboard() {
        const container = document.getElementById(this.container);
        const kbel = document.createElement("div");
        let getOffset: Function = (key: any) => {key.type == 'Enharmonic' ? -(key.overlap)+'%' : ''}
        kbel.style.backgroundColor = '#16161D';
        kbel.innerHTML = `
        <h1 style="color: white">${this.name}</h1>
        <hr />
        <div class="keyboard">
            ${
                this.keys.map((key, i) => `
                    <div id="${key.note}" class="pianokey ${(key.type == "Natural") ? 'natural' : 'enharmonic'}"
                    style="margin-left: ${getOffset(key)};margin-right: ${getOffset(key)};"
                    onmousedown
                    ></div>
                `.trim()).join('')
            }
        </div>
        `
        container.appendChild(kbel);
    }
}