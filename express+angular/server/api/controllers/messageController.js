module.exports = {
  async getPublicMessage(req, res) {
    res.status(200).json({message: 'Authorized: private message 1 from /api/messages/private1'});
  },
  async getPrivateMessage(req, res) {
    res.status(200).json({message: 'Authorized: private message 1 from /api/messages/private1'});
  },
  async getAdminMessage(req, res) {
    res.status(200).json({message: 'Authorized - Roles [\'Admin\',\'SiteAdmin\']: admin message 1 from /api/messages/admin1'});
  },
};
