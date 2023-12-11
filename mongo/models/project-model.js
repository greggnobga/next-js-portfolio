import mongoose from 'mongoose';

const projectSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        description: {
            type: String,
            required: true,
        },
        permalink: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        tags: {
            type: String,
            required: true,
        },
        demo: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    },
);

/** Define model using user schema. */
const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);
// const Project = mongoose.model('Project', projectSchema);

/** Export. */
export default Project;
