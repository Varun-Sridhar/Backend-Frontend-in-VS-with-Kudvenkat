using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BeaconScores.Models;

namespace BeaconScores.Controllers
{
    public class ScoreController : ApiController
    {
        public List<BeaconScore> Get()
        {
            Entities db = new Entities();
            List<BeaconScore> scores = db.BeaconScores.ToList();
            return scores;
        }
    }
}
