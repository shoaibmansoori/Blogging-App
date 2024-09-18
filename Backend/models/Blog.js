const mongoose = require('mongoose');
const {Schema,model} = mongoose;

const BlogSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    lastEditedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    isLocked: { type: Boolean, default: false },
    lockedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    lockedAt: { type: Date }
});

const BlogModel = model('Blog', BlogSchema);

module.exports = BlogModel;