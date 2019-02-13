import { TextFragmentInterface } from '~/lib/TextFragmentInterface'

export class MorrisDom {
    public static walkNode(node: HTMLElement | ChildNode, classList: string[] = []): TextFragmentInterface[] {
        if (node.nodeValue) {
            return [{
                text: node.nodeValue,
                styles: classList
            }]
        }
        const classCandidate = (node as HTMLElement).getAttribute("class");
        const newClassList: string[] = classCandidate ? classList.concat([classCandidate]) : classList;
        return Array.from(node.childNodes).reduce((acc, node) => {
            return acc.concat(MorrisDom.walkNode(node, newClassList));
        }, <TextFragmentInterface[]>[]);
    }
}

export default new MorrisDom()
