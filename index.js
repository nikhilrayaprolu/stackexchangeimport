const Sequelize = require('sequelize');
const sequelize = new Sequelize('summarisation', 'summarisationuser', '99121Padma', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },

});
sequelize
    .authenticate()
    .then(() => {
    console.log('Connection has been established successfully.');
})
.catch(err => {
    console.error('Unable to connect to the database:', err);
});
/* jshint indent: 2 */

var DataTypes = Sequelize
const Posts = sequelize.define('Posts', {
    Id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true
    },
    PostTypeId: {
        type: DataTypes.INTEGER(4),
        allowNull: false
    },
    AcceptedAnswerId: {
        type: DataTypes.INTEGER(11),
        allowNull: true
    },
    ParentId: {
        type: DataTypes.INTEGER(11),
        allowNull: true
    },
    CreationDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    DeletionDate: {
        type: DataTypes.DATE,
        allowNull: true
    },
    Score: {
        type: DataTypes.INTEGER(11),
        allowNull: true
    },
    ViewCount: {
        type: DataTypes.INTEGER(11),
        allowNull: true
    },
    Body: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    OwnerUserId: {
        type: DataTypes.INTEGER(11),
        allowNull: true
    },
    OwnerDisplayName: {
        type: DataTypes.STRING(256),
        allowNull: true
    },
    LastEditorUserId: {
        type: DataTypes.INTEGER(11),
        allowNull: true
    },
    LastEditorDisplayName: {
        type: DataTypes.STRING(40),
        allowNull: true
    },
    LastEditDate: {
        type: DataTypes.DATE,
        allowNull: true
    },
    LastActivityDate: {
        type: DataTypes.DATE,
        allowNull: true
    },
    Title: {
        type: DataTypes.STRING(256),
        allowNull: true
    },
    Tags: {
        type: DataTypes.STRING(256),
        allowNull: true
    },
    AnswerCount: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        defaultValue: '0'
    },
    CommentCount: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        defaultValue: '0'
    },
    FavoriteCount: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        defaultValue: '0'
    },
    ClosedDate: {
        type: DataTypes.DATE,
        allowNull: true
    },
    CommunityOwnedDate: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    tableName: 'Posts'
});

var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('norm.xml')
});
var parseString = require('xml2js').parseString;
lineReader.on('line', function (line) {
    xml = line;
    parseString(xml, function (err, result) {
        if(result && result.row){
            Posts.create(result.row.$).then(function(post) {
                // you can now access the newly created task via the variable task
                console.log('success');
            })
                .catch(function(err) {
                    // print the error details
                    console.log(err);
                });;
        }

    });
});

/*User.sync({force: false}).then(() => {
    // Table created
    return User.create({
        firstName: 'John',
        lastName: 'Hancock'
    });
});
User.findAll().then(users => {
    console.log(users)
})
*/