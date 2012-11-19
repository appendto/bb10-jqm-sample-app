var pluginFactory = function( _, anvil ) {
    return anvil.plugin({
        // Name your plugin
        name: "anvil.gentemplate",
        // Activity list: "identify", "pull", "combine", "pre-process","compile", "post-process", "push", "test"
        activity: "combine",
        // Command all the things [ "-s, --somecommand", "Run this plugin for awesomesauce" ]
        commander: [],
        // Configure all the things...
        configure: function( config, command, done ) {
            done();
        },
        config: {
            templates: [{
                name: "contact",
                src: "./src/js/templates/home/contact.html"
            }, {
                name: "home",
                src: "./src/js/templates/home/home.html"
            }, {
                name: "header",
                src: "./src/js/templates/shared/header.html"
            }, {
                name: "footer",
                src: "./src/js/templates/shared/footer.html"
            }, {
                name: "viewContact",
                src: "./src/js/templates/view/contact.html"
            }, {
                name: "editContact",
                src: "./src/js/templates/edit/contact.html"
            }, {
                name: "editHeader",
                src: "./src/js/templates/edit/editHeader.html"
            }, {
                name: "viewHeader",
                src: "./src/js/templates/view/viewHeader.html"
            }, {
                name: "phone",
                src: "./src/js/templates/edit/editPhones.html"
            }, {
                name: "email",
                src: "./src/js/templates/edit/editEmails.html"
            }],
            output: "./lib/js/templates.js"
        },
        // Run all the things...
        run: function( done ) {
            var calls = {};

            anvil.scheduler.parallel( this.config.templates, this.readFile, function( fileInfo ) {
                this.writeFiles( fileInfo, done );
            }.bind( this ));
            
        },
        readFile: function( tmpl, done ) {
            anvil.fs.read( tmpl.src, function( content, err ) {
                if ( err ) {
                    anvil.log.error( err );
                }

                // The done from the parallel call in `run`.
                done({
                    name: tmpl.name,
                    content: content
                });
            });
        },
        writeFiles: function( fileInfo, done ) {
            var fileContent = "App.Templates = {",
                tmplKeys = "";

            tmplKeys = _.map( fileInfo, function( file ) {
                return "\n    " + file.name + ": _.template(\"" +
                    this.cleanContent( file.content ) +
                    "\")";
            }.bind( this )).join( "," );

            fileContent += tmplKeys + "\n};";
            anvil.fs.write( this.config.output, fileContent, function( err ) {
                if ( err ) {
                    anvil.log.error( err );
                }

                anvil.log.complete( "Templates written to: " + this.config.output + "." );
                // The final done from `run`.
                done();
            }.bind( this ));
        },
        cleanContent: function( content ) {
            return content.replace( /\r\n?|\n/g, "" ).replace( /\"/g, "\\\"");
        }
    } );
};

module.exports = pluginFactory;
