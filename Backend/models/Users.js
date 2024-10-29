import mongoose from "mongoose";

const userschema = mongoose.Schema(
          {
                    username: {
                              type: String,
                              required: true,
                    },

                    email: {
                              type: String,
                              required: true,
                              unique: true,
                    },

                    password: {
                              type: String,
                              required: true,
                    },

                    isAdmin: {
                              type: Boolean,
                              required: true,
                              default: true
                    },
          },
          { timestamps: true },

);

userschema.methods.canAccessAdminResources = function () {
          return this.isAdmin;
};

const User = mongoose.model("User", userschema);
export default User;