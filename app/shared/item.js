"use strict";
var Item = (function () {
    function Item(Item_id, Title, Image, Image_name, Parent, Level) {
        this.Item_id = Item_id;
        this.Title = Title;
        this.Image = Image;
        this.Image_name = Image_name;
        this.Parent = Parent;
        this.Level = Level;
    }
    return Item;
}());
exports.Item = Item;
;
exports.form = {
    visible: false,
};
//# sourceMappingURL=item.js.map