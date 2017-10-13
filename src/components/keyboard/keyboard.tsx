import * as React from 'react';

import { Key, KeyProps } from '../key'

export interface KeyboardProps {
    octaves: string;
    rootNote: string;
    majorColor?: string;
    minorColor?: string;
    height?: string;
}

export class Keyboard extends React.Component<KeyboardProps, undefined> {
    public static propDefaults: any = {
        majorColor: "#FFFFFF",
        minorColor: "#000000",
        height: "100%"
    }
    public keys: any[] = [];
    public constructor(props: KeyboardProps) {
        super(props);
        this.orderNotes();
        this.createKeys();
    }
    public render() {
        let styles = {
            width: "100%",
            height: this.props.height
        }
        let internalState: any = {
            componentProps: this.props,
            notes: this.notes
        }
        let pianoKeys = this.keys.map( (pk) =>
            <Key key={pk.key} note={pk.note}/>
        )
        return (
            <div className="outline flex flex-column flex-wrap" style={styles}>
                <div className="flex-0-1 self-start w-100 flex flex-row justify-center">
                    <span className="ph2 flex-auto f6 tr br">Root Note:&nbsp;{this.props.rootNote}</span><span className="ph2 flex-auto f6 tl">Octaves:&nbsp;{this.props.octaves}</span>
                </div>
                <div className="flex flex-row flex-auto outline mt2">
                    {pianoKeys}
                </div>
            </div>
        );
    }

    // Handle internal representation of keys
    private notes: string[] = [
        'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'
    ]
    //Private Methods
    private rotateArray(array: any[], index: number): any[] {
        let length = array.length >>> 0;
        index = index >> 0;
        let newArray: string[] = ([] as string[]).concat(array);
        newArray.push.apply(newArray, newArray.splice.call(newArray, 0, index));
        return newArray;
    }
    private orderNotes(): void {
        //get the index of the desired starting note to use as count
        let shiftAmount: number = this.notes.indexOf(this.props.rootNote.replace(/([0-9])+/, ''));
        this.notes = this.rotateArray(this.notes, shiftAmount);
        console.log(JSON.stringify(this.notes));
    }
    private createKeys(): void {
        // let keyArray: Array<PianoKey> = [];
        // let note_counter = 0;
        let octaves: number = parseInt(this.props.octaves);

        // Loop through the internal notes array ${octaves} times;
        for (let oIndex: number = 0; oIndex < octaves; oIndex++) {

            let baseOctave: number = parseInt(this.props.rootNote.replace(/([a-zA-Z#]*)/, ''));

            for (let nIndex: number = 0; nIndex < 12; nIndex++) {
                // get current note string and check its value to
                // determine if we should force increment the baseOctave
                // before appending it to the note string.
                let currentNote: string = this.notes[nIndex];
                baseOctave += ((currentNote === "C" && (nIndex !== 0)) ? 1 : 0);
                currentNote += (baseOctave + oIndex).toString()

                let newKey = { "note": currentNote, "key": currentNote }
                // if(newKey.type == 'Enharmonic') {
                //     newKey.setOverlap(octaves);
                // }
                this.keys.push(newKey);
            }
        }
    }
}