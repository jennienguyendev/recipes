const moment = require('moment');

module.exports = {
    formatDate: function (date, format) {
        return moment(date).format(format);
    },
    truncate: function (str, len) {
        if (str.length > len && str.length > 0) {
            let new_str = str + ' ';
            new_str = str.substr(0, len);
            new_str = str.substr(0, new_str.lastIndexOf(' '));
            new_str = new_str.length > 0 ? new_str : str.substr(0, len);
            return new_str + '...';
        }
        return str;
    },
    stripTags: function (val) {
        return val.replace(/<(?:.|\n)*?>/gm, '');
    },
    editIcon: function (postByUser, loggedUser, noteId, floating = true) {
        if (postByUser.toString() == loggedUser.toString()) {
            if (floating) {
                return `<a href="/recipes/edit/${noteId.toString()}" class="btn-floating halfway-fab blue"><i class="fas fa-edit fa-small"></i></a>`;
            }
            else {
                return `<a href="/recipes/edit/${noteId.toString()}"><i class="fas fa-edit"></i></a>`;
            }
        }
        else {
            return '';
        }
    },
    select: function (selected) {
        if (selected === 'public') {
            return `<option value="public" selected>Public</option>
                    <option value="private">Private</option>`;
        }
        if (selected === 'private') {
            return `<option value="public">Public</option>
                    <option value="private" selected>Private</option>`;
        }
    },
}
