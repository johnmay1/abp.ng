export class BaseTreeNode {
    constructor(props) {
        this.children = [];
        this.isLeaf = true;
        Object.assign(this, props);
    }
    static create(props) {
        return new BaseTreeNode(props);
    }
}
export function createTreeFromList(list, keySelector, parentKeySelector, valueMapper) {
    const map = createMapFromList(list, keySelector, valueMapper);
    const tree = [];
    list.forEach(row => {
        const id = keySelector(row);
        const parentId = parentKeySelector(row);
        const node = map.get(id);
        if (parentId) {
            const parent = map.get(parentId);
            if (!parent)
                return;
            parent.children.push(node);
            parent.isLeaf = false;
            node.parent = parent;
        }
        else {
            tree.push(node);
        }
    });
    return tree;
}
export function createMapFromList(list, keySelector, valueMapper) {
    const map = new Map();
    list.forEach(row => map.set(keySelector(row), valueMapper(row)));
    return map;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS11dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2xpYi91dGlscy90cmVlLXV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sT0FBTyxZQUFZO0lBS3ZCLFlBQVksS0FBUTtRQUpwQixhQUFRLEdBQWtCLEVBQUUsQ0FBQztRQUM3QixXQUFNLEdBQUcsSUFBSSxDQUFDO1FBSVosTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELE1BQU0sQ0FBQyxNQUFNLENBQW1CLEtBQVE7UUFDdEMsT0FBTyxJQUFJLFlBQVksQ0FBSSxLQUFLLENBQWdCLENBQUM7SUFDbkQsQ0FBQztDQUNGO0FBRUQsTUFBTSxVQUFVLGtCQUFrQixDQUNoQyxJQUFTLEVBQ1QsV0FBa0QsRUFDbEQsaUJBQXFDLEVBQ3JDLFdBQTJCO0lBRTNCLE1BQU0sR0FBRyxHQUFHLGlCQUFpQixDQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDOUQsTUFBTSxJQUFJLEdBQXVDLEVBQUUsQ0FBQztJQUVwRCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ2pCLE1BQU0sRUFBRSxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QixNQUFNLFFBQVEsR0FBRyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN4QyxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRXpCLElBQUksUUFBUSxFQUFFO1lBQ1osTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsTUFBTTtnQkFBRSxPQUFPO1lBQ25CLE1BQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25DLE1BQWMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQzlCLElBQVksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1NBQy9CO2FBQU07WUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2pCO0lBQ0gsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7QUFFRCxNQUFNLFVBQVUsaUJBQWlCLENBQy9CLElBQVMsRUFDVCxXQUFrRCxFQUNsRCxXQUEyQjtJQUkzQixNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsRUFBYyxDQUFDO0lBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBRSxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBCYXNlVHJlZU5vZGU8VCBleHRlbmRzIG9iamVjdD4ge1xyXG4gIGNoaWxkcmVuOiBUcmVlTm9kZTxUPltdID0gW107XHJcbiAgaXNMZWFmID0gdHJ1ZTtcclxuICBwYXJlbnQ6IFRyZWVOb2RlPFQ+O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wczogVCkge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBwcm9wcyk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY3JlYXRlPFQgZXh0ZW5kcyBvYmplY3Q+KHByb3BzOiBUKSB7XHJcbiAgICByZXR1cm4gbmV3IEJhc2VUcmVlTm9kZTxUPihwcm9wcykgYXMgVHJlZU5vZGU8VD47XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVHJlZUZyb21MaXN0PFQgZXh0ZW5kcyBvYmplY3QsIFIgZXh0ZW5kcyB1bmtub3duPihcclxuICBsaXN0OiBUW10sXHJcbiAga2V5U2VsZWN0b3I6IChpdGVtOiBUKSA9PiBudW1iZXIgfCBzdHJpbmcgfCBzeW1ib2wsXHJcbiAgcGFyZW50S2V5U2VsZWN0b3I6IHR5cGVvZiBrZXlTZWxlY3RvcixcclxuICB2YWx1ZU1hcHBlcjogKGl0ZW06IFQpID0+IFIsXHJcbikge1xyXG4gIGNvbnN0IG1hcCA9IGNyZWF0ZU1hcEZyb21MaXN0KGxpc3QsIGtleVNlbGVjdG9yLCB2YWx1ZU1hcHBlcik7XHJcbiAgY29uc3QgdHJlZTogTm9kZVZhbHVlPFQsIHR5cGVvZiB2YWx1ZU1hcHBlcj5bXSA9IFtdO1xyXG5cclxuICBsaXN0LmZvckVhY2gocm93ID0+IHtcclxuICAgIGNvbnN0IGlkID0ga2V5U2VsZWN0b3Iocm93KTtcclxuICAgIGNvbnN0IHBhcmVudElkID0gcGFyZW50S2V5U2VsZWN0b3Iocm93KTtcclxuICAgIGNvbnN0IG5vZGUgPSBtYXAuZ2V0KGlkKTtcclxuXHJcbiAgICBpZiAocGFyZW50SWQpIHtcclxuICAgICAgY29uc3QgcGFyZW50ID0gbWFwLmdldChwYXJlbnRJZCk7XHJcbiAgICAgIGlmICghcGFyZW50KSByZXR1cm47XHJcbiAgICAgIChwYXJlbnQgYXMgYW55KS5jaGlsZHJlbi5wdXNoKG5vZGUpO1xyXG4gICAgICAocGFyZW50IGFzIGFueSkuaXNMZWFmID0gZmFsc2U7XHJcbiAgICAgIChub2RlIGFzIGFueSkucGFyZW50ID0gcGFyZW50O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdHJlZS5wdXNoKG5vZGUpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gdHJlZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1hcEZyb21MaXN0PFQgZXh0ZW5kcyBvYmplY3QsIFIgZXh0ZW5kcyB1bmtub3duPihcclxuICBsaXN0OiBUW10sXHJcbiAga2V5U2VsZWN0b3I6IChpdGVtOiBUKSA9PiBudW1iZXIgfCBzdHJpbmcgfCBzeW1ib2wsXHJcbiAgdmFsdWVNYXBwZXI6IChpdGVtOiBUKSA9PiBSLFxyXG4pIHtcclxuICB0eXBlIEtleSA9IFJldHVyblR5cGU8dHlwZW9mIGtleVNlbGVjdG9yPjtcclxuICB0eXBlIFZhbHVlID0gTm9kZVZhbHVlPFQsIHR5cGVvZiB2YWx1ZU1hcHBlcj47XHJcbiAgY29uc3QgbWFwID0gbmV3IE1hcDxLZXksIFZhbHVlPigpO1xyXG4gIGxpc3QuZm9yRWFjaChyb3cgPT4gbWFwLnNldChrZXlTZWxlY3Rvcihyb3cpLCB2YWx1ZU1hcHBlcihyb3cpKSk7XHJcbiAgcmV0dXJuIG1hcDtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgVHJlZU5vZGU8VCBleHRlbmRzIG9iamVjdD4gPSB7XHJcbiAgW0sgaW4ga2V5b2YgVF06IFRbS107XHJcbn0gJiB7XHJcbiAgY2hpbGRyZW46IFRyZWVOb2RlPFQ+W107XHJcbiAgaXNMZWFmOiBib29sZWFuO1xyXG4gIHBhcmVudD86IFRyZWVOb2RlPFQ+O1xyXG59O1xyXG5cclxudHlwZSBOb2RlVmFsdWU8VCBleHRlbmRzIG9iamVjdCwgRiBleHRlbmRzICguLi5hcmdzOiBhbnkpID0+IGFueT4gPSBGIGV4dGVuZHMgdW5kZWZpbmVkXHJcbiAgPyBUcmVlTm9kZTxUPlxyXG4gIDogUmV0dXJuVHlwZTxGPjtcclxuIl19