// const express = require("express");
// const router = express.Router();
// const { Zone, Forum } = require("../models");

// // Get the forum and its associated zone
// router.get('/:zoneId/forums/:forumId', async (req, res) => {
//     try {
//         const zoneId = req.params.zoneId;
//         const forumId = req.params.forumId;
//         console.log('Zone ID:', zoneId);
//         console.log('Forum ID:', forumId);

//         // Fetch the forum by forumId and include its associated zone
//         const forum = await Forum.findByPk(forumId, {
//             include: Zone,
//         });

//         if (!forum) {
//             console.log('Forum not found');
//             return res.status(404).json({ message: "Forum not found" });
//         }

//         console.log('Forum Data:', forum);

//         res.json({ forum, zone: forum.Zone });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Internal Server Error" });
//     }
// });

// module.exports = router;