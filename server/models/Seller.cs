// Seller.cs
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FarmifyService.models
{
    public class Seller
    {
        [Key]
        public required string ID { get; set; } = string.Empty;
        
        [Required]
        public string UserID { get; set; } = string.Empty;
        
        [Required]
        public string Address { get; set; } = string.Empty;
        
        public string Description { get; set; } = string.Empty;

        public string SellerName { get; set; } = string.Empty;

        public string PPID { get; set; } = string.Empty;

        public string PPsecret { get; set; } = string.Empty;

        public decimal? SellerRating { get; set; } = null;
        
        public virtual User User { get; set; } = null!;
    }
}